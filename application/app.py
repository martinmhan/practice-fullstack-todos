from flask import request, jsonify, render_template
from index import app, db
from models import Todo

@app.route('/')
def main_page():
  return render_template('index.html')

@app.route('/todos', methods=['GET'])
def get_todos():
  data = Todo.query.all();
  todos = list(map(lambda Todo: Todo.todo, data))
  return jsonify(todos)

@app.route('/todos', methods=['POST'])
def add_todo():
  incoming = request.get_json()
  new_todo = Todo(todo=incoming['todo'])
  db.session.add(new_todo)
  return 'todo successfully added'

if __name__ == '__main__':
  print('Running app.py')
  app.run(debug=True)
