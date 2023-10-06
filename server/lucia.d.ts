/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./utils/auth.js").Auth
  type DatabaseUserAttributes = {
    email: string
    // add authStatus
  }
  type DatabaseSessionAttributes = {
    createdAt: Date
  }
}
