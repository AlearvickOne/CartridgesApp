export const enum EnumTokens {
  "ACCESS_TOKEN" = "accessToken",
  "REFRESH_TOKEN" = "refreshToken",
}

export const enum EnumPaidStatus {
  "PAID" = "paid",
  'WAITING' = 'waiting'
  'NOT_PAID' = "notPaid"
}
export type TPaid = "paid" | "waiting" | "notPaid";
