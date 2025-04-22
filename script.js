window.addEventListener("load", () => {
  // Show Splash
  const splash = document.getElementById("splash");
  const onboarding = document.getElementById("onboarding");
  const home = document.getElementById("home");

  // After 3.5 sec, show onboarding
  setTimeout(() => {
    splash.style.display = "none";
    onboarding.style.display = "flex";

    // After 5 sec, move to home
    setTimeout(() => {
      onboarding.style.display = "none";
      home.style.display = "flex";
    }, 5000);

  }, 3500);
});