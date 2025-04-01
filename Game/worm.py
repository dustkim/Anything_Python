import tkinter as tk  # tkinker는 GUI에 대한 표준 Python 인터페이스이며 Window 창을 생성할 수 있다.

window=tk.Tk()

window.title("Worm Game")                                                                # window 창 제목 설정
window.geometry('640x400+450+200')                                                       # window 창 너비와 높이, 초기 화면 위치 설정
window.configure(bg="lightblue")
window.resizable(False, False)                                                           # window 창 크기 조절 설정정

label=tk.Label(window, text="점수 :", width=8, height=2, fg="red", relief="flat",
               bg=window.cget("bg"))                                                     # window 창에 글씨 넣기
label.place(x=20, y=20)                                                                  # 위젯을 배치하기 위해 사용
label=tk.Label(window, text="레벨 :", width=8, height=2, fg="red", relief="flat",
               bg=window.cget("bg"))
label.place(x=20, y=60)

def startGame():
    button.place_forget()

button=tk.Button(window, text="게임 시작", overrelief="solid", command=startGame, width=20, repeatdelay=1000)      # 버튼 생성
button.place(relx=0.5, rely=0.5, anchor="center")
# button.pack(expand=True)



window.mainloop()