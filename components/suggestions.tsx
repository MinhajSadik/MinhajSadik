import type { NextPage } from "next";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import styled from "styled-components";
import DomainItems from "./domain-items";

export type SuggestionsType = {
  className?: string;
};

const SuggestedDomain = styled.h3`
  margin: 0;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const Inputlabel1 = styled(InputLabel)``;
const Filter = styled(MenuItem)``;
const Select1 = styled(Select)``;
const Formhelpertext1 = styled(FormHelperText)``;
const FilterDropdown = styled(FormControl)`
  height: 27px;
  width: 85px;
  font-family: var(--font-inter);
  font-size: var(--font-size-3xl);
  color: var(--color-gray-200);
`;
const SuggestionHeader = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: var(--gap-xl);
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const SuggestedDomains = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-size: var(--font-size-5xl);
  color: var(--color-gray-100);
  font-family: var(--font-archivo);
`;
const SuggestionsRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-35xl);
  gap: var(--gap-5xl);
  text-align: left;
  font-size: var(--font-size-3xl);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-8xl);
    padding-right: var(--padding-8xl);
    box-sizing: border-box;
  }
`;

const Suggestions: NextPage<SuggestionsType> = ({ className = "" }) => {
  return (
    <SuggestionsRoot className={className}>
      <SuggestionHeader>
        <SuggestedDomain>Suggested domain</SuggestedDomain>
        <FilterDropdown
          variant="standard"
          sx={{
            borderTopWidth: "1px",
            borderRightWidth: "1px",
            borderBottomWidth: "1px",
            borderLeftWidth: "1px",
            borderRadius: "0px 0px 0px 0px",
            width: "85px",
            height: "27px",
            m: 0,
            p: 0,
            "& .MuiInputBase-root": {
              m: 0,
              p: 0,
              minHeight: "27px",
              justifyContent: "center",
              display: "inline-flex",
            },
            "& .MuiInputLabel-root": {
              m: 0,
              p: 0,
              minHeight: "27px",
              display: "inline-flex",
            },
            "& .MuiMenuItem-root": {
              m: 0,
              p: 0,
              height: "27px",
              display: "inline-flex",
            },
            "& .MuiSelect-select": {
              m: 0,
              p: 0,
              height: "27px",
              alignItems: "center",
              display: "inline-flex",
            },
            "& .MuiInput-input": { m: 0, p: 0 },
            "& .MuiInputBase-input": {
              color: "rgba(33, 33, 33, 0.7)",
              fontSize: 22,
              fontWeight: "Regular",
              fontFamily: "Inter",
              textAlign: "left",
              p: "0 !important",
            },
          }}
        >
          <Inputlabel1 color="primary" />
          <Select1
            color="primary"
            disableUnderline
            displayEmpty
            IconComponent={() => (
              <img
                width="24px"
                height="24px"
                src="/arrowdown01.svg"
                style={{}}
              />
            )}
          >
            <Filter>Filter</Filter>
          </Select1>
          <Formhelpertext1 />
        </FilterDropdown>
      </SuggestionHeader>
      <SuggestedDomains>
        <DomainItems dipupaulai="dipupaul.ai" />
        <DomainItems
          dipupaulai="dipupaul.io"
          dipupaulaiDisplay="inline-block"
          dipupaulaiMinWidth="119px"
        />
        <DomainItems
          dipupaulai="dipupaul.run"
          dipupaulaiDisplay="unset"
          dipupaulaiMinWidth="unset"
        />
        <DomainItems
          dipupaulai="dipupaul.org"
          dipupaulaiDisplay="unset"
          dipupaulaiMinWidth="unset"
        />
      </SuggestedDomains>
    </SuggestionsRoot>
  );
};

export default Suggestions;
