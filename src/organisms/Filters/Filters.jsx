import React from "react";
import { PropTypes as T } from "prop-types";

import {
  StyledCheckboxList,
  StyledFilter,
  StyledFilters,
  StyledFiltersTitle,
  StyledLonelyCheckbox,
} from "./styled";
import ExpansionPanel from "../ExpansionPanel";
import Typography from "../../atoms/Typography";
import TagsPanel from "../TagsPanel";
import Checkbox from "../../molecules/Checkbox";
import { getFilterLabels } from "../../utilsDataRelated/filters";

const Filters = ({
  buttonProps,
  chosenTopPlaced,
  className,
  config,
  currentLng,
  fallbackLng,
  filters,
  fnDispatch,
  fnFilterAdd,
  fnFiltersClearAll,
  fnFilterRemove,
  panelColorKey,
  searchItemsLength,
  showTitle,
  systemData,
  tagProps,
  type,
  t,
  variant,
}) => {
  const { active, labels, facets } = filters;
  const facetsKeysFiltered = Object.keys(facets);

  if (!facetsKeysFiltered?.length) {
    return null;
  }

  const onCheckboxClick = (checked, key, value) => {
    if (checked) {
      fnDispatch(fnFilterAdd(key, value, currentLng));
    } else {
      fnDispatch(fnFilterRemove(key, value, currentLng));
    }
  };

  const addLabelsToLabels = (labels) =>
    labels.map((label) => {
      const [collection, id] = label.split(":");
      const filterLabel = getFilterLabels(
        config.options || systemData[config[collection].key],
        id
      );
      return { id: label, label: filterLabel };
    });

  const onTagRemove = (tag) => () => {
    const [key, value] = tag.split(":");
    fnDispatch(fnFilterRemove(key, value, currentLng));
  };

  const getLabel = (value, lng) =>
    value.label?.[lng] || value.label || value.id;

  const getFilter = (filtersConfig, facetId, facetValues, i) => {
    const filter = filtersConfig[facetId] || {};

    if (!facetValues?.length) {
      return null;
    }

    if (filter.type === "checkboxList") {
      return (
        <ExpansionPanel
          key={i}
          type={type || "dark"}
          header={filter.label[currentLng] || filter.label[fallbackLng]}
          size="small"
          initialOpened
        >
          <StyledFilter>
            <StyledCheckboxList>
              {facetValues.map((value, id) => {
                return value?.id ? (
                  <Checkbox
                    checked={active[facetId]?.includes(value.id)}
                    handleChange={(e) => onCheckboxClick(e, facetId, value.id)} //{ id: value.id, slug: slugify(value.label?.en) }
                    key={id}
                    label={`${getLabel(value, currentLng)} (${
                      searchItemsLength ? value.count : 0
                    })`}
                    value={value.id}
                    variant={variant}
                  />
                ) : null;
              })}
            </StyledCheckboxList>
          </StyledFilter>
        </ExpansionPanel>
      );
    } else if (filter.type === "checkbox") {
      return (
        <StyledLonelyCheckbox
          checked={active[facetId]?.includes(facetValues)}
          handleChange={(e) => onCheckboxClick(e, facetId, facetValues)}
          key={i}
          label={filter.label[currentLng] || filter.label[fallbackLng]}
          order={filters.length}
          variant={variant}
        />
      );
    }
  };

  return (
    <StyledFilters className={className} chosenTopPlaced={chosenTopPlaced}>
      {showTitle && (
        <StyledFiltersTitle>
          <Typography type="caption1" className="title">
            {t("filters")}
          </Typography>
        </StyledFiltersTitle>
      )}
      {/**
      <ExpansionPanel key={-1} type={type || 'dark'} header={t('price')} size="small" initialOpened>
        <StyledPriceWrapper>
          <Slider max={100} min={0} className="priceSlider" variant={variant} />
        </StyledPriceWrapper>
      </ExpansionPanel>
      */}

      {facetsKeysFiltered.map((facet, i) =>
        getFilter(config, facet, facets[facet], i)
      )}

      {!!labels.length && (
        <div className="tagsStickyWrapper">
          <TagsPanel
            panelColorKey={panelColorKey}
            removeTag={onTagRemove}
            tags={addLabelsToLabels(labels)}
            currentLanguage={currentLng}
            className="chosenFilters"
            withButton
            tagProps={tagProps}
            buttonProps={{
              text: t("clearFilters"),
              onClick: () => fnDispatch(fnFiltersClearAll(currentLng)),
              ...buttonProps,
            }}
          />
        </div>
      )}
    </StyledFilters>
  );
};

export default Filters;

Filters.propTypes = {
  chosenTopPlaced: T.bool,
  config: T.object,
  filters: T.object,
  systemData: T.object,
  t: T.func.isRequired,
  currentLng: T.string.isRequired,
  variant: T.oneOf(["primary", "secondary"]),
};

Filters.defaultProps = {
  variant: "secondary",
};
