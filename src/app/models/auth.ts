export interface Auth {
  access_token: string
  anonymous: boolean
  client_id: string
  client_name: string
  client_secret: string
  expire_in: string
  ratelimit: number
  refresh_token: string
  scopes: string[]
  token_type: string
  username: string
}
