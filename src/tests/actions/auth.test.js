import { login, logout } from '../../actions/auth';

test('should generate login action object', () => {
    const uid = 'acb123';
    const action = login(uid);
    axpect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('should generate logout action object', () => {
    const action = logout();
    axpect(action).toEqual({
        type: 'LOGOUT'
    });
});