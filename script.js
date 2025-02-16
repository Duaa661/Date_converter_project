const form=document.querySelector('form');
const input=document.querySelector('input')
const local=document.querySelector('.local span')
const utc=document.querySelector('.utc span')
const iso=document.querySelector('.iso span')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const timestamp=Number(input.value)
    const mydate=new Date(timestamp)
    local.innerText=mydate.toLocaleString('en-GB',{dateStyle:'full',timeStyle:'full'})
    utc.innerText=mydate.toUTCString()
    iso.innerText=mydate.toISOString()
})
