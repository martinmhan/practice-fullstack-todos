from sqlalchemy import create_engine, Table, Column, Integer, String, MetaData, ForeignKey

engine = create_engine('postgresql://martinhan@localhost:5432/todos', echo=True)
metadata = MetaData()

todos = Table('todos', metadata,
  Column('id', Integer, primary_key=True),
  Column('todo', String)
)

metadata.create_all(engine)