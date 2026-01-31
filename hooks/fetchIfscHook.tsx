import type React from 'react';

export interface IfscFetchParams {
  code: string;
  controller: AbortController;
  setIfscLoading: (loading: boolean) => void;
  setIfscError: (error: string | null) => void;
  setBranchAddress: (address: string | null) => void;
  ifscFetchedRef: React.RefObject<string | null>;
  onSuccess: (data: { BANK: string; BRANCH: string; ADDRESS: string }) => void;
  onClearErrors?: (fields: string[]) => void;
}

export const fetchIfsc = async ({
  code,
  controller,
  setIfscLoading,
  setIfscError,
  setBranchAddress,
  ifscFetchedRef,
  onSuccess,
  onClearErrors,
}: IfscFetchParams) => {
  try {
    const res = await fetch(`https://ifsc.razorpay.com/${code}`, {
      signal: controller.signal,
    });
    if (!res.ok) throw new Error('Could not verify IFSC code');
    const data = await res.json();
    ifscFetchedRef.current = code;
    onSuccess({
      BANK: data.BANK || '',
      BRANCH: data.BRANCH || '',
      ADDRESS: data.ADDRESS || '',
    });
    setBranchAddress(data.ADDRESS || null);
    setIfscError(null);
    onClearErrors?.(['bankName', 'branchName']);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Could not fetch bank details';
    setIfscError(message);
    setBranchAddress(null);
    ifscFetchedRef.current = null;
  } finally {
    setIfscLoading(false);
  }
};
