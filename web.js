document.addEventListener ('click', e => {
   if (!isDropdownButton && e.target.closest('[data-dropdown]') !=null) return
   
   let currentDropdown
   if (isDropdownButton){
      currentDropdown = e.target.closest('[data-dropdown')
      currentDropdown.classlist.toggle('active')
   }
   document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown) return
      dropdown.classlist.remove('active')
   })
})


