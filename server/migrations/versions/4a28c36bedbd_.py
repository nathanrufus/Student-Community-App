"""empty message

Revision ID: 4a28c36bedbd
Revises: 
Create Date: 2024-04-18 11:49:42.771155

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4a28c36bedbd'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('email', sa.String(length=100), nullable=True),
    sa.Column('password', sa.String(length=100), nullable=True),
    sa.Column('number', sa.String(length=100), nullable=True),
    sa.PrimaryKeyConstraint('user_id')
    )
    op.create_table('creditcard',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userid', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('email', sa.String(length=100), nullable=True),
    sa.Column('password', sa.String(length=100), nullable=True),
    sa.Column('number', sa.String(length=100), nullable=True),
    sa.ForeignKeyConstraint(['userid'], ['users.user_id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('items',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userid', sa.Integer(), nullable=True),
    sa.Column('seller_name', sa.String(length=100), nullable=True),
    sa.Column('description', sa.String(length=700), nullable=True),
    sa.Column('category', sa.String(length=100), nullable=True),
    sa.Column('price', sa.String(length=100), nullable=True),
    sa.ForeignKeyConstraint(['userid'], ['users.user_id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('payment',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userid', sa.Integer(), nullable=True),
    sa.Column('amount', sa.String(length=100), nullable=True),
    sa.Column('number', sa.String(length=100), nullable=True),
    sa.ForeignKeyConstraint(['userid'], ['users.user_id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('cart',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('userid', sa.Integer(), nullable=True),
    sa.Column('cart_id', sa.Integer(), nullable=True),
    sa.Column('name', sa.String(length=100), nullable=True),
    sa.Column('item_photo', sa.LargeBinary(), nullable=True),
    sa.Column('seller_photo', sa.LargeBinary(), nullable=True),
    sa.Column('total_amount', sa.String(length=100), nullable=True),
    sa.Column('price', sa.String(length=100), nullable=True),
    sa.ForeignKeyConstraint(['cart_id'], ['items.id'], ),
    sa.ForeignKeyConstraint(['userid'], ['users.user_id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('cart')
    op.drop_table('payment')
    op.drop_table('items')
    op.drop_table('creditcard')
    op.drop_table('users')
    # ### end Alembic commands ###
