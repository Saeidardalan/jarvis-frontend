// src/components/ProtectedRoute.tsx
import { ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  // TODO: replace with real auth check later
  return <>{children}</>;
}
