'use client';

import { useState } from 'react';
import OnboardingForm from './components/onboarding';
import StatusSearch from './components/status';
import { UserPlus, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [activeView, setActiveView] = useState<'choice' | 'onboard' | 'search'>('choice');
  const router = useRouter();
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-amber-50/30">
      {/* Hero Header */}
      <header className="relative overflow-hidden border-b border-primary/20">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23171717' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="flex items-center gap-4">
            <div className="flex size-14 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
              <span className="text-2xl font-bold">✦</span>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/70">
                 Partner Network
              </p>
              <h1 className="mt-0.5 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                MGM Partner
              </h1>
            </div>
          </div>
          <p className="mt-4 max-w-xl text-base text-muted-foreground">
            Complete your registration and track your application status in real-time. Join our
            prestigious network of premium partners.
          </p>
        </div>
      </header>

      {/* Content Area */}
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        {activeView === 'choice' ? (
          <>
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
              What would you like to do?
            </p>
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              <button
                className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card p-8 text-left shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
                onClick={() => router.push('/onboard')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <UserPlus className="size-7" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Register as Partner</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Complete your onboarding to join our network. Submit your details, bank
                    information, and ID verification.
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                    Get started
                    <svg
                      className="ml-1 size-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </button>

              <button
                onClick={() => setActiveView('search')}
                className="group relative overflow-hidden rounded-2xl border-2 border-border bg-card p-8 text-left shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Search className="size-7" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">Check Application Status</h2>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Already applied? Enter your application ID to view the current status and
                    updates on your submission.
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                    Track status
                    <svg
                      className="ml-1 size-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <Button
              variant="ghost"
              onClick={() => setActiveView('choice')}
              className="-ml-2 text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 size-4" />
              Back
            </Button>
            {activeView === 'onboard' ? <OnboardingForm /> : <StatusSearch />}
          </div>
        )}
      </div>
    </main>
  );
}
