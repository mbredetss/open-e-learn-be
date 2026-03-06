/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const up = (pgm) => {
    pgm.createTable('users', {
        id: {
            type: 'CHAR(22)', 
            notNull: true, 
            primaryKey: true
        }, 
        username: {
            type: 'VARCHAR(100)', 
            notNull: true, 
            unique: true
        }, 
        email: {
            type: 'VARCHAR(100)', 
            notNull: true,
        }, 
        phone: {
            type: 'VARCHAR(15)', 
            notNull: true,
        }, 
        password: {
            type: 'VARCHAR(100)', 
            notNull: true,
        }, 
        createdAt: {
            type: 'TIMESTAMPTZ', 
            notNull: true, 
            default: pgm.func('CURRENT_TIMESTAMP'),
        },
        updateddAt: {
            type: 'TIMESTAMPTZ', 
            notNull: true, 
            default: pgm.func('CURRENT_TIMESTAMP'),
        }
    });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
export const down = (pgm) => {
    pgm.dropTable('users');
};
