button = 0
delay = 0

def on_button_pressed_a():
    if button != 0:
        game.game_over()
    game.resume()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    if button != 2:
        game.game_over()
    game.resume()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    if button != 1:
        game.game_over()
    game.resume()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global delay, button
    delay = randint(500, 2000)
    button = randint(0, 2)
    if game.is_running():
        basic.pause(delay)
        if button == 0:
            basic.show_leds("""
                # # # . .
                # # # . .
                # # # . .
                # # # . .
                # # # . .
                """)
        elif button == 1:
            basic.show_leds("""
                . . # # #
                . . # # #
                . . # # #
                . . # # #
                . . # # #
                """)
        else:
            basic.show_leds("""
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                """)
        basic.pause(100)
        game.start_countdown(1000)
basic.forever(on_forever)
