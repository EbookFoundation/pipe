const ACTIONS = {
  set_working: 'set_working',
  set_user: 'set_user',
  set_password: 'set_password',
  set_carousel: 'set_carousel',
  set_error: 'set_error',
  clear_error: 'clear_error'
}

export default ACTIONS

export const setWorking = working => ({
  type: ACTIONS.set_working,
  data: working
})

export const setEmail = email => ({
  type: ACTIONS.set_user,
  data: email
})

export const setPassword = pass => ({
  type: ACTIONS.set_password,
  data: pass
})

export const setCarousel = pos => ({
  type: ACTIONS.set_carousel,
  data: pos
})

export const setError = data => ({
  type: ACTIONS.set_error,
  data: data
})

export const clearError = () => ({
  type: ACTIONS.clear_error
})

export const checkEmail = email => (dispatch, getState) => {
  // dispatch(setWorking(true))
  if (/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(email)) {
    dispatch(setCarousel(2))
  } else {
    dispatch(setError({
      type: 'email',
      error: 'Please enter a valid email address.'
    }))
  }
  // dispatch(setWorking(false))
}

export const checkPassword = (email, password) => (dispatch, getState) => {
  dispatch(setWorking(true))

  // do email + password check

  dispatch(setWorking(false))
}
