// import React from 'react';
// import { shallow } from 'enzyme';
// import expenses from '../fixtures/expenses';
// import { EditExpensePage } from '../../components/EditExpensePage';

// let startEditExpense, startRemoveExpense, history, wrapper;

// beforeEach(() => {
//   startEditExpense = jest.fn();
//   startRemoveExpense = jest.fn();
//   history = { push: jest.fn() };
//   wrapper = shallow(
//     <EditExpensePage
//       startEditExpense={startEditExpense}
//       startRemoveExpense={startRemoveExpense}
//       history={history}
//       expense={expenses[2]}
//     />
//   );
// });

// test('should render EditExpensePage', () => {
//   expect(wrapper).toMatchSnapshot();
// });

// test('should handle startEditExpense', () => {
//   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
// });

// test('should handle startRemoveExpense', () => {
//   wrapper.find('button').simulate('click');
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(startRemoveExpense).toHaveBeenLastCalledWith({
//     id: expenses[2].id
//   });
// });




import React from 'react';
// import { shallow } from 'enzyme';	
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
