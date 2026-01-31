export const validateForm = (formData: any) => {
    const errors: Record<string, string> = {};
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.dob) newErrors.dob = 'Date of birth is required';
    if (!formData.accountHolderName.trim()) newErrors.accountHolderName = 'Account holder name is required';
    if (!formData.bankName.trim()) newErrors.bankName = 'Bank name is required';
    if (!formData.accountNumber.trim()) newErrors.accountNumber = 'Account number is required';
    if (!formData.ifscCode.trim()) newErrors.ifscCode = 'IFSC code is required';
    if (!formData.branchName.trim()) newErrors.branchName = 'Branch name is required';
    if (!formData.idDocument) newErrors.idDocument = 'Government ID document is required';
    return Object.keys(newErrors).length === 0;
    return errors;
  };