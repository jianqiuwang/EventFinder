class DropInterests < ActiveRecord::Migration[6.1]
  def up
    drop_table :interests
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
