function loggedInGuard(to, from, next) {
  next(vm => {
    return vm.$store.state.sesion != null;
  })
}

export { loggedInGuard };