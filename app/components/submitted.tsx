'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Copy, Check } from 'lucide-react';
import Lottie from 'lottie-react';
import  { useState } from 'react';
import animationData from '@/public/lottie/success.json';

interface SubmittedProps {
  applicationId: string;
}

export default function Submitted({ applicationId }: SubmittedProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(applicationId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="mx-auto max-w-xl px-4 py-12 md:py-16">
      <Card className="overflow-hidden border-0 bg-linear-to-b from-amber-50/80 to-white shadow-xl shadow-amber-950/5 ring-1 ring-amber-200/50">
        <CardContent className="p-8 md:p-10">
          <div className="flex flex-col items-center text-center">
            {/* Lottie or icon */}
            <div className="relative mb-6 flex h-32 w-32 items-center justify-center md:h-40 md:w-40">
              {animationData ? (
                <Lottie
                  animationData={animationData}
                  loop={false}
                  className="h-full w-full"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/10 ring-4 ring-emerald-500/20">
                  <CheckCircle2 className="h-12 w-12 text-emerald-600" />
                </div>
              )}
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              Application submitted
            </h3>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Your application has been received and is being reviewed. You&apos;ll hear from us soon.
            </p>

            {/* Application ID block */}
            <div className="mt-8 w-full rounded-xl border border-amber-200/60 bg-amber-50/50 p-5 shadow-inner md:p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-800/80">
                Application ID
              </p>
              <p className="mt-2 break-all font-mono text-xl font-bold text-foreground md:text-2xl">
                {applicationId}
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                Save this ID to track your application status
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="mt-4 gap-2 border-amber-300/60 bg-white hover:bg-amber-50"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy ID
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
