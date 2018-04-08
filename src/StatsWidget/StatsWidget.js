import React from 'react';
import PropTypes from 'prop-types';
import {Card} from '../Grid';
import WixComponent from '../BaseComponents/WixComponent';
import styles from './StatsWidget.scss';
import Text from '../Text/deprecated';
import classnames from 'classnames';
import ArrowVertical from '../Icons/dist/components/ArrowVertical';
import ButtonWithOptions from '../ButtonWithOptions';

/**
 * Component for app widget in Business Manager
 */
class StatsWidget extends WixComponent {

  static propTypes = {
    /** Widget title */
    title: PropTypes.string.isRequired,
    /** Statistics to display */
    statistics: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      percent: PropTypes.number
    })).isRequired,
    /** Filters for statistics (will be shown in right top corner) Accepts array of  <StatsWidget.Filter> which accepts all dropdown properties*/
    children: PropTypes.arrayOf((propValue, key) => {
      if (!propValue || propValue.length > 3) {
        return new Error(`StatsWidget: Invalid Prop children, maximum amount of filters are 3`);
      }

      if (propValue[key].type !== StatsWidget.Filter) {
        return new Error(`StatsWidget: Invalid Prop children, only StatsWidget.Filter is allowed`);
      }
    })
  };

  _renderPercentage(percent) {
    return (<Text appearance="H3">
      <div
        className={classnames(styles.percents, {[styles.isNegative]: percent < 0}, {[styles.isPositive]: percent > 0})}
        data-hook="percent-wrapper"
        >
        <span className={classnames(styles.percentArrow)}><ArrowVertical/></span>
        <span data-hook="percent-value">{Math.abs(percent)}%</span>
      </div>
    </Text>);
  }

  _renderColumn(statistics, index) {
    return (<div className={styles.statsColumn} key={index} data-hook="statistics-item">
      <Text dataHook="statistics-item-title" appearance="H1">{statistics.title}</Text>
      <Text dataHook="statistics-item-subtitle" appearance="H3">
        {statistics.subtitle}
      </Text>
      {typeof (statistics.percent) === 'number' && this._renderPercentage(statistics.percent)}
    </div>);
  }

  _renderFilters(filters) {
    return (<div className={styles.filtersWrapper}>{filters}</div>);
  }

  render() {
    const {title, statistics, children} = this.props;

    return (
      <Card>
        <Card.Header
          dataHook="stats-widget-title"
          title={title}
          suffix={this._renderFilters(children)}
          />
        <Card.Content>
          <div className={styles.statsColumnWrapper} data-hook="stats-widget-content-wrapper">
            {statistics.map((stat, index) => this._renderColumn(stat, index))}
          </div>
        </Card.Content>
      </Card>
    );
  }
}

StatsWidget.Filter = ButtonWithOptions;

StatsWidget.displayName = 'StatsWidget';

export default StatsWidget;
