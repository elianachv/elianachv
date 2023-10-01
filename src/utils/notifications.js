import Swal from "sweetalert2";

const notify = (location, icon, paused = 3000) => {
  return Swal.mixin({
    toast: true,
    position: location,
    showConfirmButton: false,
    icon: icon,
    iconColor: "#955a73",
    timer: paused,
    showCloseButton: true,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
};

export { notify };
