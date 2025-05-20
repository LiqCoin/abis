export const IPermit2_ABI = [
    'function permit(address owner, tuple(address token, uint160 amount, uint48 expiration, uint48 nonce) details, bytes signature) external',
    'function allowance(address owner, address token, address spender) external view returns (uint160 amount, uint48 expiration, uint48 nonce)',
    'function approve(address token, address spender, uint160 amount, uint48 expiration) external',
    'function nonce(address owner, address token) external view returns (uint48)',
];