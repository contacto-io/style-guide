import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'
import { Space, Row } from 'antd'
import { Card } from '../Card/index'

/**
 * A common table layout
 *
 */
export const TableLayout = ({ className = '', table, searchBar, actionButtons }) => {
  return (
    <Card.Section className="contacto-table-layout-card-section">
      <div className={['sg contacto-table-layout', className].join(' ')}>
        <Row justify="space-between" className="contacto-table-layout--controls">
          <Space direction="horizontal" size={16}>
            <div className="contacto-table-layout--search-bar">{searchBar}</div>
            {!!actionButtons?.length &&
              actionButtons.map((actionButtons, i) => (
                <div className="contacto-table-layout--action-button" key={i}>
                  {actionButtons}
                </div>
              ))}
          </Space>
        </Row>
        <div className="contacto-table-wrapper">{table}</div>
      </div>
    </Card.Section>
  )
}

TableLayout.propTypes = {
  /**
   * Class to be added
   */
  className: PropTypes.string,
  table: PropTypes.node,
  searchBar: PropTypes.node,
  pagination: PropTypes.node,
  actionButtons: PropTypes.arrayOf(PropTypes.node),
}
