from turtle import Turtle, Screen
import time
import random

# up, down, right, left 방향으로 움직이는 함수
# 반대로는 이동하지 못하게 설정한다.
def up():
    if worms[0].heading() != 270:
        worms[0].setheading(90)

def down():
    if worms[0].heading() != 90:
        worms[0].setheading(270)

def right():
    if worms[0].heading() != 180:
        worms[0].setheading(0)

def left():
    if worms[0].heading() != 0:
        worms[0].setheading(180)

def create_worm(pos):
    for pos in start_pos:
        add_segment(pos)

def add_segment(pos):                           # create_worm 함수 하나만 사용하니 처음 생성하는 3개의 박스가 계속 생성되는 문제 발생
    worm_body = Turtle()                        # -> add_segment 함수를 생성하여 초기 create_worm 함수를 한 번 활용하고 후에는 add_segment 함수 사용
    worm_body.shape("square")
    worm_body.color("darkgreen")
    worm_body.up()
    worm_body.goto(pos)
    worms.append(worm_body)

def rand_food_pos():                            # 먹이가 나오는 곳이 랜덤으로 생성되게 만들었다.
    rand_x = random.randint(-250, 250)
    rand_y = random.randint(-250, 250)
    return rand_x, rand_y

def restart(x, y):
    global game_on, score, worms, re, score_box
    
    for worm in worms:
        worm.hideturtle()
    worms.clear()

    score = 0
    if score_box:
        score_box.clear()
        score_box.hideturtle()
        score_box = Turtle()
        score_box.ht()
        score_box.color("black")
        score_box.up()
        score_box.goto(-270, 250)
        score_box.write(f"점수 : {score}", font=("", 15, "bold"))
    if re:
        re.clear()
        re.hideturtle()
        re = None

    create_worm(start_pos)
    food.goto(rand_food_pos())

    game_on = True
    run_game()

def game_over():                                # Game이 종료되면 "Game Over" 와 스코어가 나오게 설정
    score_box.goto(0, 0)                        # False를 넣어서 Turtle이 끝나지 않고 유지할 수 있도록 설정
    score_box.write(f"Game Over\n   점수 : {score}", False, "center", ("", 30, "bold"))
    re_button()

re = None
def re_button():
    global re
    re = Turtle()
    re.shape("square")
    re.color("black")
    re.up()
    re.goto(0, -100)
    re.write("Restart", False, "center", font=("", 20, "bold"))

screen = Screen()
screen.setup(600, 600)
screen.bgcolor("white")
screen.title("Worm Game")
screen.tracer(0)


# 점수 만들기
score = 0
score_box = None
def score_box_create():
    global score_box
    if score_box is None:
        score_box = Turtle()
        score_box.ht()
        score_box.color("black")
        score_box.up()
        score_box.goto(-270, 250)
        score_box.write(f"점수 : {score}", font=("", 15, "bold"))

# 먹이 만들기
food = Turtle()
food.shape("circle")
food.color("red")
food.up()
food.speed(0)
food.goto(rand_food_pos())

# worm 만들기
start_pos = [(0,0), (-20,0), (-40,0)]           # 초기 worm 생성 위치치
worms = []

# for pos in start_pos:
create_worm(start_pos)

# 방향키로 움직임 만들기
screen.listen()
screen.onkeypress(up, "Up")
screen.onkeypress(down, "Down")
screen.onkeypress(right, "Right")
screen.onkeypress(left, "Left")
screen.onclick(restart)

game_on = True
def run_game():
    global game_on, score
    while game_on:
        screen.update()
        time.sleep(0.1)
        score_box_create()

        for i in range(len(worms)-1, 0, -1):
            worms[i].goto(worms[i-1].pos())

        worms[0].forward(20)

        if worms[0].distance(food) < 15:            # worm의 머리 부분이 먹이와 15 이내로 있으면 worm이 길어지게 설정정
            score += 1
            score_box.clear()
            score_box.write(f"점수 : {score}", font=("", 15, "bold"))

            food.goto(rand_food_pos())
            add_segment(worms[-1].pos())

        if worms[0].xcor() > 280 or worms[0].xcor() < -280 or worms[0].ycor() > 280 or worms[0].ycor() < -280:
            game_on = False
            game_over()

        for body in worms[1:]:
            if worms[0].distance(body) < 10:
                game_on = False
                game_over()

run_game()
screen.mainloop()       # 창이 바로 닫히지 않게 설정함