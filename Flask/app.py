from flask import Flask, render_template, request, redirect
app = Flask(__name__)


@app.route('/')
def index():
    nomelista = "Lista de coisas a fazer"
    return render_template(
        'index.html',
        nomelista=nomelista,
        itens=itens
    )


itens = []


@app.route('/teste', methods=['POST', 'GET'])
def teste():
    if request.method == "POST":
        item = request.form['item']
        itens.append(item)
        return redirect('/')


if __name__ == '__main__':
    app.run(debug=True)
