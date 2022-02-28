let sheet
let music
let sound_loop

let circleMask

let img_height
let img_width
let img_pos_x
let img_pos_y

const post_path = ''

function preload() {
    sheet = loadImage(post_path + 'finnal.png')
    music = loadSound(
        post_path + 'history of the ring theme with sheet music.mp3'
    )
}

function setup() {
    userStartAudio()

    sound_loop = new p5.SoundLoop(playSound, 22)
    sound_loop.start()

    music.play()

    // create canvas same size as window
    createCanvas(windowWidth, windowHeight)
    // set background color
    background(10)
    smooth()

    img_height = 720 / 1.2
    img_width = 1280 / 1.2
    img_pos_x = (windowWidth - img_width) / 2
    img_pos_y = (windowHeight - img_height) / 2

    image(sheet, img_pos_x, img_pos_y, img_width, img_height)
    filter(BLUR, 10)
    image(sheet, img_pos_x, img_pos_y, img_width, img_height)
}

function draw() {}

function playSound(timeFromNow) {
    music.play()
}
