import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedComponent({ user, loading, children }) {
  let navigate = useNavigate();

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
