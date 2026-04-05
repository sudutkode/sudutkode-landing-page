export function useScrollToSection() {
  const scrollToSection = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // Update URL without reload
    history.pushState(null, "", hash);

    // Offset for sticky navbar height
    const navbarHeight = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({top, behavior: "smooth"});
  };

  return {scrollToSection};
}
