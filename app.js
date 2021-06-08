const text = [
    'Pakistan is sacred land for Muslims. It got independence from British Rule on 14th August 1947. This country has been built with the belief of ‘Two Nation Theory’.  The visionary leader Quaid-e-Azam Mohammad Ali Jinnah lead us to independence. The capital city of the country in Islamabad.',
    'Karachi and Lahore are another two big cities in the country. The national game of Pakistan is Hockey. The national language is Urdu. This country has amazing natural beauty and unbelievable hills, mountains, valleys, and coastal areas. I love my country so much. I wish to live long here as a proud citizen.',
    'Pakistan means ‘Land of Pure’ in Urdu and Persian. The official name of my country is the ‘Islamic Republic of Pakistan’. The majority of peoples are Muslims here in this country. It is a democratic country. Pakistan has a growing economy with a powerful military.',
    'People are so much friendly here. Now tourism is developing and lots of foreign’s tourists are visiting our country regularly. It is a very big country divides by 5 provinces and a few special areas. I love to live here because I born here.',
    'When I go away from Pakistan I miss my country a lot and I can feel a deep connection with my motherland at that time. I know everyone has that patriotism to love their own country and it comes naturally.',
    'The national anthem of Pakistan is ‘Pak Sarzamin’ or ‘The Sacred Land’. It is beautiful music that helps me to feel my country. I love Pakistan a lot. I wish to have a better situation for our economy and tourism.',
    'My country’s name is Pakistan. The meaning of Pakistan is ‘Land of Pure’ in Urdu and Persian. We have a very glorious history. We got independence on 14th August 1947 when Quaid-e-Azam Mohammad Ali Jinnah, the visionary leader who succeeded to pass the two-nation theory and bill',
    'And Muslims got a different country for them where they can practice Islam properly. That was a blessing for us to have a different country for us. Pakistan is one of the strongest countries in the world in order to Army. But our economy is not as big as expected.',
    'But now it is expanding as a republican nation with a good government. It has five different provinces. Each province has its own culture and local languages. But Urdu is the approved and national language of Pakistan. It is a widely known language in the world with a huge amount of speakers.',
    'Pakistan is one of the most beautiful countries in the world with lots of amazing hills, coastal areas, deserted areas, and snow falling Azad Kashmir. Each part of my country is amazing and I love to travel to every part of it. I am a proud Pakistani and I love my country very much.'
];

const form = document.querySelector('.lorem-form')
const amount = document.getElementById('amount')
const result = document.querySelector('.lorem-text')

form.addEventListener('submit', function (e) {
  e.preventDefault()
  const value = parseInt(amount.value)
  const random = Math.floor(Math.random() * text.length)
  // empty
  // -1
  // >9
  if(isNaN(value) || value <= 0 || value > 11) {
    result.innerHTML = `<p class="result">${text[random]}</p>`
  } else {
    let tempText = text.slice(0, value)

    tempText = tempText.map(function (item) {
      return `<p class="result">${item}</p>`
    }).join('')
    // console.log(tempText)
    result.innerHTML = tempText
  }
})