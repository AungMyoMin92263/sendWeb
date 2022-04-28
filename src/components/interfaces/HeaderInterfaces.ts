export interface HeaderInterface {
  currentPage: string;
}

export interface AuthorizationInterface {
  headers: Authorization;
}

interface Authorization {
  Authorization: string | null;
}
