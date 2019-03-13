from flask import Flask, request, jsonify, render_template
from sqlalchemy.sql import select
from models import todos, engine

app = Flask(__name__, static_folder='../static', template_folder='../static')

conn = engine.connect()

@app.route('/')
def main_page():
  return render_template('index.html')

@app.route('/todos', methods=['GET'])
def get_todos():
  s = select([todos])
  data = conn.execute(s)
  todo_list = list(map(lambda Todo: Todo.todo, data))
  return jsonify(todo_list)

@app.route('/todos', methods=['POST'])
def add_todo():
  incoming = request.get_json()
  new_todo_text = incoming['todo']
  ins = todos.insert().values(todo=new_todo_text)
  conn.execute(ins)
  return 'todo successfully added'

if __name__ == '__main__':
  print('Running app.py')
  app.run(debug=True)
