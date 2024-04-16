""""""
from flask import Flask, render_template

APP = Flask()


@APP.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    APP.run(debug=True)