'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle2, XCircle, Search } from 'lucide-react';
import useFetchStatus from '@/hooks/useFetchStatus';

const STATUS_MAP: Record<string, any> = {
  pending: { label: 'Pending', icon: Clock, class: 'bg-amber-50 text-amber-800' },
  approved: { label: 'Approved', icon: CheckCircle2, class: 'bg-emerald-50 text-emerald-800' },
  rejected: { label: 'Rejected', icon: XCircle, class: 'bg-rose-50 text-rose-800' },
};

const NEXT_STEPS: Record<string, string[]> = {
  pending: ['Application in queue', 'Review in 2–3 business days'],
  approved: ['Account activated', 'You can start earning'],
  rejected: ['Fix issues and reapply', 'Contact support if needed'],
};

const daysAgo = (date: string) => {
  const d = Math.floor((Date.now() - new Date(date).getTime()) / 86400000);
  return d === 0 ? 'Today' : `${d} day(s) ago`;
};

export default function StatusSearch() {
  const [id, setId] = useState('');
  const [data, setData] = useState<any>(null);
  const { fetchStatus, isPending, error } = useFetchStatus();

  const onSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetchStatus(id.trim());
    if (res) setData(res);
  };

  const statusKey = data?.status?.toLowerCase() ?? 'pending';
  const status = STATUS_MAP[statusKey];
  const Icon = status.icon;

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Track Application</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSearch} className="flex gap-2">
            <Input
              placeholder="Enter Application ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <Button disabled={isPending}>
              <Search className="h-4 w-4 mr-1" />
              {isPending ? 'Searching' : 'Search'}
            </Button>
          </form>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </CardContent>
      </Card>

      {data && (
        <Card>
          <CardContent className="space-y-4 pt-6">
            <div className={`flex items-center gap-3 p-3 rounded ${status.class}`}>
              <Icon className="h-5 w-5" />
              <p className="font-semibold">{status.label}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <p>ID</p><p className="font-mono">{data.agentId ?? data._id}</p>
              <p>Name</p><p>{data.name}</p>
              <p>Email</p><p>{data.email}</p>
              <p>Submitted</p><p>{daysAgo(data.createdAt)}</p>
            </div>

            <div>
              <p className="font-semibold mb-2">Next Steps</p>
              <ul className="list-disc ml-5 text-sm text-muted-foreground">
                {NEXT_STEPS[statusKey]?.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
