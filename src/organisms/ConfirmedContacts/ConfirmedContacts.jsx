import React from "react";
import { withTheme } from "styled-components";

import { Icon, Typography, isObjectEmpty } from "../../index";

import { StyledContactsConfirmed, StyledContactsRow } from "./styled";

const ConfirmedContacts = ({ currentLng, values, onEditContacts, t }) => {
  if (isObjectEmpty(values)) return null;

  return (
    <StyledContactsConfirmed>
      <StyledContactsRow className="edit">
        <Typography type="caption2" text={t("contacts")} />
        <Icon name="pencil" onClick={onEditContacts} />
      </StyledContactsRow>
      <StyledContactsRow>
        <Typography type="body2" text={t("name")} />
        <Typography
          type="body2"
          text={values.name || values.firstName + " " + values.lastName}
          textAlign="right"
        />
      </StyledContactsRow>
      {(values.phone?.numberFull || typeof values.phone === "string") && (
        <StyledContactsRow>
          <Typography type="body2" text={t("phone")} />
          <Typography
            type="body2"
            text={values.phone?.numberFull || values.phone}
            textAlign="right"
          />
        </StyledContactsRow>
      )}
      <StyledContactsRow>
        <Typography type="body2" text="Email" />
        <Typography type="body2" text={values.email} textAlign="right" />
      </StyledContactsRow>
      <StyledContactsRow>
        <Typography type="body2" text={t("country")} />
        <Typography
          type="body2"
          text={values.country?.label[currentLng]}
          textAlign="right"
        />
      </StyledContactsRow>
      {values.region && (
        <StyledContactsRow>
          <Typography type="body2" text={t("city")} />
          <Typography
            type="body2"
            text={values.region?.terms?.[0]?.value || values.region}
            textAlign="right"
          />
        </StyledContactsRow>
      )}
      {values.city && (
        <StyledContactsRow>
          <Typography type="body2" text={t("city")} />
          <Typography
            type="body2"
            text={values.city?.terms?.[0]?.value || values.city}
            textAlign="right"
          />
        </StyledContactsRow>
      )}
      {values.address && (
        <StyledContactsRow>
          <Typography type="body2" text={t("address")} />
          <Typography
            type="body2"
            text={values.address?.terms?.[0]?.value || values.address}
            textAlign="right"
          />
        </StyledContactsRow>
      )}
    </StyledContactsConfirmed>
  );
};

export default withTheme(ConfirmedContacts);
