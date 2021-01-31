const nameChangeHandler = (value) => {
  if (value.toLowerCase() === 'renemundt')
    var inputElement = document.querySelector('input')
  inputElement.style.display = 'none'
  var labelElement = document.querySelector('label')
  labelElement.style.display = 'inline'
  setTimeout(() => {
    labelElement.style.display = 'none'
    var imageElement = document.querySelector('.link-wrapper')
    imageElement.style.display = 'flex'
  }, 2000)
}