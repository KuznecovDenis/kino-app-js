

function changeTheme (btnSelector, themeClass) {
  const themeBtn = document.querySelector(btnSelector)

  if (localStorage.getItem('style-theme') == themeClass) {
    document.body.classList.toggle(themeClass)
    themeBtn.classList.remove('active') // исправить стили и кнопку
    // themeBtn.classList.add('active')
  }
  
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle(themeClass)
  
    if (document.body.classList.contains(themeClass)) {
      localStorage.setItem('style-theme', themeClass)
      themeBtn.classList.remove('active') // исправить стили и кнопку
      // themeBtn.classList.add('active')
    } else {
      localStorage.setItem('style-theme', '');
      themeBtn.classList.add('active') // исправить стили и кнопку
      // themeBtn.classList.remove('activ')
    }
  })
}

changeTheme('.theme-btn', 'theme_light')



