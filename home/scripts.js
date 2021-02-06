const nameChangeHandler = (value) => {
  var inputElement = document.querySelector('input')
  if (value.toLowerCase() === 'renemundt') {
    inputElement.style.display = 'none'
    var labelElement = document.querySelector('label')
    labelElement.style.display = 'inline'
    setTimeout(() => {
      labelElement.style.display = 'none'
      var imageElement = document.querySelector('.link-wrapper')
      imageElement.style.display = 'flex'
    }, 2000)
  }
}
