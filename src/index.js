let dogList = document.querySelector(".dogs-list")

let dogSection = document.querySelector(".main__dog-section")

console.log(dogList, dogSection)

function addDogListItem() {
    for (let dog of data) {
        let dogLi = document.createElement('li')
        dogLi.className = 'dogs-list__button'
        dogLi.textContent = dog.name
        dogList.append(dogLi)
    }
}

addDogListItem()

function displayDog(dog) {
    dogSection.textContent = ''

    let name = document.createElement("h2")
    name.textContent = dog.name

    let image = document.createElement("img")
    image.src = dog.image
    image.alt = ''

    let description = document.createElement("div")
    description.className = 'main__dog-section__desc'

    let bio = document.createElement("h3")
    bio.textContent = 'Bio'

    let bioContent = document.createElement("p")
    bioContent.textContent = dog.bio

    let behaviorP = document.createElement("p")
    let behaviorEm = document.createElement("em")
    behaviorEm.textContent = 'Is naughty?'
    if (dog.isGoodDog === false) {
        behaviorP.append(behaviorEm, ' Yes!')
    } else {
        behaviorP.append(behaviorEm, ' No!')
    }

    let behaviorButton = document.createElement("button")
    behaviorButton.className = 'main__dog-section__btn'
    if (dog.isGoodDog) {
        behaviorButton.textContent = 'Doog dod!'
    } else {
        behaviorButton.textContent = 'Dab dod!'
    }

    description.append(bio, bioContent)
    behaviorP.append(behaviorEm)
    dogSection.append(name, image, description, behaviorP, behaviorButton)
}

displayDog(data[0])