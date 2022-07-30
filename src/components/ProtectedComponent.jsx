import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../authentication/firebase";

export default function ProtectedComponent({ children }) {
  let navigate = useNavigate();

  //ambil state user dari firebase
  const [user, loading] = useAuthState(auth);

  //cek status user. kalau null, pindah ke halaman login
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);

  //logic untuk render
  if (loading) {
    return;
  } else {
    //render komponen childrennya
    return children;
  }
}
