import React from 'react';
import { Stepper } from 'material-ui/Stepper';
class StepController extends React.Component {

    state = {
        stepIndex: 0,
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        if (stepIndex < 2) {
            this.setState({ stepIndex: stepIndex + 1 });
        }
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    render() {
        const { children } = this.props;
        const { stepIndex } = this.state;

        return (
            <Stepper
                activeStep={stepIndex}
                linear={false}
                orientation="vertical"
            >
                {children.map((step, index) => React.cloneElement(
                    step,
                    {
                        onClick: () => this.setState({ stepIndex: index }),
                        key: index,
                        index,
                    }
                ))}
            </Stepper>
        );
    }
}

export default StepController;