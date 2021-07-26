from flask import Flask, render_template, request, redirect
import smtplib
import os


app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")


@app.route('/subscribe', methods=["POST"])
def subscribe():
    name = request.form.get("name")
    email = request.form.get("email")
    email2 = "testesthay@gmail.com"
    comment = request.form.get("comment")

    message = "Obrigada por entrar em contato. Eu te retorno assim que possível."
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login("testesthay@gmail.com", 'SENHABLUE@!')
    server.sendmail("testesthay@gmail.com", email, message.encode('utf-8'))
    server.sendmail("testesthay@gmail.com",
                    email2, f'Oi Thay! Você tem um contado do {name}, o email do contato é {email} e a mensagem {comment}'.encode('utf-8'))
    return render_template('subscribe.html', name=name, email=email, comment=comment)


if __name__ == '__main__':
    app.run(debug=True)
