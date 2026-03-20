export const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
};

export const cleanDigits = (value: string) => value.replace(/\D/g, '');

export const formatBrazilianPhone = (value: string) => {
    const digits = cleanDigits(value);

    if (!digits) return '';

    if (digits.length <= 2) {
        return `(${digits}`;
    }

    if (digits.length <= 6) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    }

    if (digits.length <= 10) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
    }

    const trimmed = digits.slice(0, 11);
    return `(${trimmed.slice(0, 2)}) ${trimmed.slice(2, 7)}-${trimmed.slice(7)}`;
};

export const isValidBrazilianPhone = (value: string) => {
    const digits = cleanDigits(value);
    return digits.length === 10 || digits.length === 11;
};
