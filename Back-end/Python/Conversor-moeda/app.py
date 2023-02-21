from tkinter import Tk, ttk, Frame
from tkinter import *
from PIL import ImageTk, Image
import requests
from bs4 import BeautifulSoup

def calcular():
    global valor
    opc1 = de_c.get()
    opc2 = para_c.get()
    valor = valor.get()

    site = requests.get(f'https://www.xe.com/pt/currencyconverter/convert/?Amount={valor}&From={opc1}&To={opc2}')
    soup = BeautifulSoup(site.content, 'html.parser')
    
    convert = soup.find('p', class_='result__BigRate-sc-1bsijpp-1 iGrAod').text.strip().split(' ')[0].split(',')
    conversao = f'{opc2+ " " + convert[0] + "," + convert[1][:2]}'
    resultado.configure(text=conversao)


cor0 = "#FFFFFF"  # white / branca
cor1 = "#333333"  # black / preta
cor2 = "#38576b"  # dark blue / azul escuro

janela = Tk()
janela.geometry('300x320')
janela.title('Conversor de moeda')
janela.config(bg=cor0)
janela.resizable(width=False, height=False)

style = ttk.Style(janela)
style.theme_use('clam')

top = Frame(width=300, height=60, background=cor2, padx=0, pady=0)
top.grid(row=0, column=0)
main = Frame(width=300, height=260, background=cor0, padx=0, pady=0)
main.grid(row=1, column=0)

img = Image.open('imagens/icone.png')
img = img.resize((40, 40), Image.ANTIALIAS)
img = ImageTk.PhotoImage(img)

icon = Label(top, image=img, width=300, height=5, relief='raised', compound=LEFT, text='CONVERSOR DE MOEDAS', padx=5, pady=30, bg=cor2, fg=cor0, anchor=CENTER, font='Arial 12 bold')
icon.place(x=0, y=0)

resultado = Label(main, width=12, height=2, bg=cor0, fg=cor1, relief=SOLID, text='', font='Arial 20 bold')
resultado.grid(row=0, column=0, pady=10, columnspan=2, sticky=NSEW)

moedas = ['AOA', 'BRL', 'EUR', 'INR', 'USD']

de_l = Label(main, text='De', bg=cor0, fg=cor1, font='Arial 11 bold')
de_l.grid(row=1, column=0, sticky=W)
de_c = ttk.Combobox(main, width=10, justify=CENTER, font='Arial 12')
de_c.grid(row=2, column=0, sticky=EW)
de_c['values'] = moedas

para_l = Label(main, text=' Para', bg=cor0, fg=cor1, font='Arial 11 bold')
para_l.grid(row=1, column=1, sticky=W)
para_c = ttk.Combobox(main, width=10, justify=CENTER, font='Arial 12')
para_c.grid(row=2, column=1, sticky=EW, padx=5)
para_c['values'] = moedas

valor = Entry(main, width=19, relief=SOLID, font='Arial 15 bold', justify=CENTER)
valor.grid(row=3, column=0, columnspan=2, pady=15, sticky=NSEW)

enter = Button(main, width=19, relief=RAISED, font='Arial 15 bold', bg=cor2, fg=cor0, text='Converter', command=calcular)
enter.grid(row=4, column=0, columnspan=2)

janela.mainloop()