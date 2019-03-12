from index import db

class Todo(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  todo = db.Column(db.String(80), unique=True, nullable=False)

db.create_all()