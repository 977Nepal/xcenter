import React from 'react';
import './snackbar.css'
import { connect } from "react-redux";
import { X } from "lucide-react"
import { deleteSuccessMessage } from "../../components/pages/FormBuilderModule/Actions/success-message-action"

class ShowSnackbar extends React.Component {
  state = {
    open: false,
    message: null,
    openTime: null,
    stop: false,
    open1: false,
    message1: null,
    openTime1: null,
    stop1: false,
    toggle: true,
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  stopTimer() {
    this.setState({
      openTime: 1,
      stop: true
    })
  }

  startTimer() {
    this.setState({
      openTime: 1,
      stop: false
    })
  }

  interval() {
    this.timer = setInterval(() =>
      this.setState({ openTime: (this.state.openTime && !this.state.stop) ? this.state.openTime + 1 : 1 }, () => {
        if (this.state.openTime >= 4) {
          this.handleClick()
          this.stopTimer()
        }
      }), 1000)
  }

  handleClick1 = () => {
    this.setState({ open1: !this.state.open1 });
  };

  stopTimer1() {
    this.setState({
      openTime1: 1,
      stop1: true
    })
  }

  startTimer1() {
    this.setState({
      openTime1: 1,
      stop1: false
    })
  }

  interval1() {
    this.timer1 = setInterval(() =>
      this.setState({ openTime1: (this.state.openTime1 && !this.state.stop1) ? this.state.openTime1 + 1 : 1 }, () => {
        if (this.state.openTime1 >= 4) {
          this.handleClick1()
          this.stopTimer1()
        }
      }), 2000)
  }

//   resetMessage() {
//     store.dispatch(deleteSuccessMessage())
//   }

  componentDidMount() {
    this.setState({
      openTime1: 1,
      stop1: true,
      openTime: 1,
      stop: true
    }, () => {
      this.interval()
      this.interval1()
    })
  }

  componentWillReceiveProps(next) {
    let { successMessage } = this.props;
    let color = ''
    if (successMessage !== next.successMessage) {
      if (next.successMessage.message) {
        if (this.state.message && this.state.open && this.state.openTime < 5) {
          this.setState({
            open1: false
          })

          setTimeout(() => {
            this.setState({
              message1: this.state.message,
              open1: this.state.open,
              message: next.successMessage.message.message,
              open: true,
            }, () => {
              this.startTimer1()
              this.startTimer()
            //   this.resetMessage()
            })
          }, 1)
        } else {
          this.setState({
            open: false,
            open1: false
          })
          setTimeout(() => {
            this.setState({
              message: next.successMessage.message.message,
              open: true,
              color: color,
            }, () => {
            //   this.resetMessage()
              this.startTimer()
            })
          }, 1)
        }
      }
    }
  }

  render() {
    return (<div>
      {this.state.open && (
        <div className={`snackbar ${this.state.message?.variant}`} onMouseEnter={() => this.stopTimer()} onMouseLeave={() => this.startTimer()}>
          <div className="flex items-center innerWrapper" >
            <div className="message">{this.state.message?.message ? this.state.message?.message.toString() : ""}</div>
            <div className={'closeIcon'}>
                <X size={22} className='snackbarClose' onClick={() => this.handleClick()} /> 
            </div>
          </div>
        </div>
      )
      }
    </div>)
  }

}


function mapStateToProps(state) {
    let {successMessage} = state
    return {
        successMessage
    }
}

export default connect(mapStateToProps)(ShowSnackbar)
