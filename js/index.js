'use strict'

const $ = (el) => document.querySelector(el)

const concertDate = new Date()
concertDate.setDate(6)
concertDate.setMonth(10)
concertDate.setHours(21)
concertDate.setMinutes(0)
concertDate.setSeconds(0)
console.log(concertDate)

console.log(Date.now())
console.log(concertDate.getTime())
let remainingTime = (concertDate.getTime() - Date.now())

const formattedRemainingDate = ( miliSecs )=>{
  let buffer = 0

  buffer = miliSecs / (1000 * 60 * 60 * 24)
  const days = Math.floor(buffer)
  
  buffer = (buffer - days) * 24
  const hours = Math.floor( buffer) 
  
  buffer = (buffer - hours) * 60
  const minutes = Math.floor( buffer) 

  buffer = (buffer - minutes) * 60
  const seconds = Math.floor( buffer) 


  return {days, hours, minutes, seconds}
}

console.log(formattedRemainingDate(remainingTime))

const updateRemainingTime = setInterval(()=>{

  const {days, hours, minutes, seconds} = formattedRemainingDate(concertDate.getTime() - Date.now())


  $('#days').textContent = days
  $('#hours').textContent = hours
  $('#minutes').textContent = minutes
  $('#seconds').textContent = seconds

  $('#days2').textContent = days
  $('#hours2').textContent = hours
  $('#minutes2').textContent = minutes
  $('#seconds2').textContent = seconds

},1000)