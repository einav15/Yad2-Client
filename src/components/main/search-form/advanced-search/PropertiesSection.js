import React from 'react'
import PropertiesListItem from './PropertiesListItem'

const PropertiesSection = () => {
    return (
        <div className="advanced-search__section properties-section">
            <span className="advanced-search__section-title">מאפייני דירה</span>
            <ul className="properties-list">
                <div className="properties-list__row">
                    <PropertiesListItem name="דלתות פנדור" />
                    <PropertiesListItem name="חניה" />
                    <PropertiesListItem name="מעלית" />
                    <PropertiesListItem name="מיזוג" />
                    <PropertiesListItem name="מרפסת" />
                </div>
                <div className="properties-list__row">
                    <PropertiesListItem name='ממ"ד' />
                    <PropertiesListItem name="סורגים" />
                    <PropertiesListItem name="מחסן" />
                    <PropertiesListItem name="גישה לננכים" />
                    <PropertiesListItem name="משופצת" />
                </div>
                <div className="properties-list__row">
                    <PropertiesListItem name="מרוהטת" />
                    <PropertiesListItem name="חיות מחמד" />
                    <PropertiesListItem name="לשותפים" />
                    <PropertiesListItem name="לטווח ארוך" />
                    <PropertiesListItem name="בבלעדיות" />
                </div>

            </ul>
        </div>
    )
}

export default PropertiesSection