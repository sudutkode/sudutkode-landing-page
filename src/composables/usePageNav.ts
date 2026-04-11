import {ref} from "vue";

const currentPage = ref<string | null>(null);

export function usePageNav() {
  const navigate = (page: string | null) => {
    currentPage.value = page;
    // Update URL without reload
    if (page) {
      history.pushState(null, "", `/${page}`);
    } else {
      history.pushState(null, "", "/");
    }
    window.scrollTo({top: 0, behavior: "smooth"});
  };

  return {currentPage, navigate};
}
