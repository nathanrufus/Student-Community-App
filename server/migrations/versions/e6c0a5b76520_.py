"""empty message

Revision ID: e6c0a5b76520
Revises: 2b04f9e2cd68
Create Date: 2024-04-13 15:09:08.604810

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e6c0a5b76520'
down_revision = '2b04f9e2cd68'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('cart', schema=None) as batch_op:
        batch_op.alter_column('id',
               existing_type=sa.VARCHAR(length=36),
               type_=sa.Integer(),
               existing_nullable=False,
               autoincrement=True)
        batch_op.alter_column('userid',
               existing_type=sa.VARCHAR(length=36),
               type_=sa.Integer(),
               existing_nullable=True)
        batch_op.alter_column('cart_id',
               existing_type=sa.VARCHAR(length=36),
               type_=sa.Integer(),
               existing_nullable=True)
        batch_op.alter_column('item_photo',
               existing_type=sa.VARCHAR(length=255),
               type_=sa.LargeBinary(),
               existing_nullable=True)
        batch_op.alter_column('seller_photo',
               existing_type=sa.VARCHAR(length=255),
               type_=sa.LargeBinary(),
               existing_nullable=True)

    with op.batch_alter_table('creditcard', schema=None) as batch_op:
        batch_op.alter_column('id',
               existing_type=sa.VARCHAR(length=36),
               type_=sa.Integer(),
               existing_nullable=False,
               autoincrement=True)
        batch_op.alter_column('userid',
               existing_type=sa.VARCHAR(length=36),
               type_=sa.Integer(),
               existing_nullable=True)

    with op.batch_alter_table('items', schema=None) as batch_op:
        batch_op.alter_column('id',
               existing_type=sa.VARCHAR(length=36),
               type_=sa.Integer(),
               existing_nullable=False,
               autoincrement=True)
        batch_op.alter_column('userid',
               existing_type=sa.VARCHAR(length=36),
               type_=sa.Integer(),
               existing_nullable=True)
        batch_op.alter_column('seller_name',
               existing_type=sa.VARCHAR(length=400),
               type_=sa.String(length=100),
               existing_nullable=True)
        batch_op.alter_column('item_photo',
               existing_type=sa.VARCHAR(length=255),
               type_=sa.LargeBinary(),
               existing_nullable=True)
        batch_op.alter_column('seller_photo',
               existing_type=sa.VARCHAR(length=255),
               type_=sa.LargeBinary(),
               existing_nullable=True)

    with op.batch_alter_table('payment', schema=None) as batch_op:
        batch_op.alter_column('id',
               existing_type=sa.VARCHAR(length=36),
               type_=sa.Integer(),
               existing_nullable=False,
               autoincrement=True)
        batch_op.alter_column('userid',
               existing_type=sa.VARCHAR(length=36),
               type_=sa.Integer(),
               existing_nullable=True)

    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('user_id',
               existing_type=sa.VARCHAR(length=36),
               type_=sa.Integer(),
               existing_nullable=False,
               autoincrement=True)
        batch_op.alter_column('password',
               existing_type=sa.VARCHAR(length=300),
               type_=sa.String(length=100),
               existing_nullable=True)
        batch_op.alter_column('number',
               existing_type=sa.VARCHAR(length=200),
               type_=sa.String(length=100),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('users', schema=None) as batch_op:
        batch_op.alter_column('number',
               existing_type=sa.String(length=100),
               type_=sa.VARCHAR(length=200),
               existing_nullable=True)
        batch_op.alter_column('password',
               existing_type=sa.String(length=100),
               type_=sa.VARCHAR(length=300),
               existing_nullable=True)
        batch_op.alter_column('user_id',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=36),
               existing_nullable=False,
               autoincrement=True)

    with op.batch_alter_table('payment', schema=None) as batch_op:
        batch_op.alter_column('userid',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=36),
               existing_nullable=True)
        batch_op.alter_column('id',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=36),
               existing_nullable=False,
               autoincrement=True)

    with op.batch_alter_table('items', schema=None) as batch_op:
        batch_op.alter_column('seller_photo',
               existing_type=sa.LargeBinary(),
               type_=sa.VARCHAR(length=255),
               existing_nullable=True)
        batch_op.alter_column('item_photo',
               existing_type=sa.LargeBinary(),
               type_=sa.VARCHAR(length=255),
               existing_nullable=True)
        batch_op.alter_column('seller_name',
               existing_type=sa.String(length=100),
               type_=sa.VARCHAR(length=400),
               existing_nullable=True)
        batch_op.alter_column('userid',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=36),
               existing_nullable=True)
        batch_op.alter_column('id',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=36),
               existing_nullable=False,
               autoincrement=True)

    with op.batch_alter_table('creditcard', schema=None) as batch_op:
        batch_op.alter_column('userid',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=36),
               existing_nullable=True)
        batch_op.alter_column('id',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=36),
               existing_nullable=False,
               autoincrement=True)

    with op.batch_alter_table('cart', schema=None) as batch_op:
        batch_op.alter_column('seller_photo',
               existing_type=sa.LargeBinary(),
               type_=sa.VARCHAR(length=255),
               existing_nullable=True)
        batch_op.alter_column('item_photo',
               existing_type=sa.LargeBinary(),
               type_=sa.VARCHAR(length=255),
               existing_nullable=True)
        batch_op.alter_column('cart_id',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=36),
               existing_nullable=True)
        batch_op.alter_column('userid',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=36),
               existing_nullable=True)
        batch_op.alter_column('id',
               existing_type=sa.Integer(),
               type_=sa.VARCHAR(length=36),
               existing_nullable=False,
               autoincrement=True)

    # ### end Alembic commands ###
